window.OMGEX = function (options) {
    if(!options || Object.keys(options).length == 0) return console.error('OMGEX: No options provided');
    if(options.zodiac) {
        let pronouns = document.querySelector("#pronouns");
        pronouns.innerHTML = pronouns.innerHTML + ` • <span id="zodiac">${options.zodiac}</span>`;
    }
    if(options.birthday) {
        let details = document.querySelector("#details");
        details.innerHTML = details.innerHTML + `<div id="birthday"><i class="fas fa-birthday-cake"></i> ${options.birthday}</div>`;
    }
    if(options.terminalKonami) {
        // courtesy of https://stackoverflow.com/a/62543148
        let c = 0;
        const kCode = [38,38,40,40,37,39,37,39,66,65];
        document.addEventListener('keydown', (e) => {
            c = (e.keyCode == kCode[c] ? c + 1 : (e.keyCode-38 ? 0 : (c ? (kCode[c-1] == 38 ? c : 0) : 0)));
            if(c == kCode.length) document.location.href = "https://terminal.land";
        });
    }
    if(options.promoteOMGEX != false) {
        let footer = document.querySelector("#footer");
        footer.innerHTML = footer.innerHTML + `<br><a href="https://github.com/LITdevs/OMGEX"><i class="fas fa-plug"></i> Extended by OMGEX</a>`;
    }
}