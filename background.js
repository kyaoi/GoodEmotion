const faces = [
  "( ͡° ͜ʖ ͡°)👍",
  "(•̀ᴗ•́)و ̑̑👍",
  "(⌐■_■)👍",
  "(っ•̀ω•́)っ👍",
  "(´∇｀)b",
  "(o´∀`o)b",
  "( ͡ᵔ ͜ʖ ͡ᵔ )👍",
  "(・∀・)b",
  "(*•̀ᴗ•́*)👍",
  "(＾_＾)b",
  "(￣︶￣)👍",
  "d(･∀･○)",
  "( ͡° ͜ʖ ͡°)👌",
  "(*^_^*)b",
  "(⌒_⌒;)b",
  "(¬‿¬)👍",
  "(๑•̀ㅂ•́)و✧",
  "(≧◡≦)b",
  "(^^)d",
  "(•‿•)👍",
  "(ﾟ∀ﾟ)b",
  "(bﾟДﾟ)b",
  "(￣ー￣)b",
  "d(°▽°d)",
  "(ᵔᴥᵔ)b",
  "(✧ω✧)👍",
  "(*≧▽≦)b",
  "d(￣▽￣o)",
  "(*￣∇￣)b",
  "(ʘ‿ʘ)b",
  "(☆ω☆)b",
  "(╯✧∇✧)╯👍",
  "( •̀ ω •́ )👍",
  "(★‿★)b",
  "d(´ω｀)",
  "(≧ω≦)b",
  "(b￣▽￣)b",
  "(⁀ᗢ⁀)👍",
  "(⌒▽⌒)b",
  "(o^^o)b",
  "(✿◠‿◠)b",
  "(d´ω｀)d",
  "(･∀･)b",
  "(๑❛ᴗ❛๑)b",
  "(=^_^=)b",
  "(⌒‿⌒)b",
  "(^^ゞb",
  "(*ﾟ▽ﾟ)b",
  "(｡♥‿♥｡)👍",
  "(•̀ᴗ•́)و ̑̑b",
  "(＾∇＾)d",
  "(￣ー￣)👍",
];

// Create the right-click menu item
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "goodEmoji",
    title: "Copy Good Emoji",
    contexts: ["all"],
  });
});

// Handle the menu click event
chrome.contextMenus.onClicked.addListener((info, tab) => {
  const randomFace = faces[Math.floor(Math.random() * faces.length)];

  chrome.scripting
    .executeScript({
      target: { tabId: tab.id },
      function: copyToClipboard,
      args: [randomFace], // Corrected `args` to pass the random face
    })
    .then(() => {
      console.log("Script executed");
    })
    .catch((err) => {
      console.error("Error executing script:", err);
    });
});

// Function to copy text to clipboard within the page context
function copyToClipboard(emotion) {
  navigator.clipboard
    .writeText(emotion)
    .then(() => {
      console.log("Emoji copied to clipboard");
    })
    .catch((err) => {
      console.error("Error copying emoji to clipboard:", err);
    });
}
