const greetings = `
 ▗▄▖  ▗▄▄▖▗▄▄▄▖▗▄▖ ▗▖ ▗▖▗▄▄▄▖▗▄▄▖ ▗▖  ▗▖▗▄▄▄▖▗▄▄▄▖
▐▌ ▐▌▐▌     █ ▐▌ ▐▌▐▌ ▐▌▐▌   ▐▌ ▐▌▐▛▚▞▜▌  █    █  
▐▌ ▐▌▐▌     █ ▐▌ ▐▌▐▛▀▜▌▐▛▀▀▘▐▛▀▚▖▐▌  ▐▌  █    █  
▝▚▄▞▘▝▚▄▄▖  █ ▝▚▄▞▘▐▌ ▐▌▐▙▄▄▖▐▌ ▐▌▐▌  ▐▌▗▄█▄▖  █  
`;

const commands = {};

const term = $("body").terminal(commands, { greetings });

const font = RubiFont;

figlet.defaults({ fontPath: "https://unpkg.com/figlet/fonts/" });
figlet.preloadFonts([font], ready);
