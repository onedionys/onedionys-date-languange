const fs = require('fs');
const path = require('path');

const langPath = path.join(__dirname, 'lang/');

function formatDateLanguange(date, lang, is_cut = false) {
    const formatDate = new Date(date);
    const monthName = formatDate.toLocaleString('default', { month: 'long' });
    const langData = JSON.parse(fs.readFileSync(langPath + lang + '.json', 'utf8'));
    const monthAbbreviation = langData[monthName];
    var cutmonthAbbreviation = monthAbbreviation;
    if(is_cut === true) {
        cutmonthAbbreviation = cutmonthAbbreviation.substring(0, 3);
    }
    return formatDate.getDate().toString().padStart(2, '0') + ' ' + cutmonthAbbreviation + ' ' + formatDate.getFullYear();
}

module.exports = { formatDateLanguange };
