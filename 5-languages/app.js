function translator(lang) {
    
    let output ="";

    switch (lang) {
        case "en": 
            output = "Hello!";
            break;
        case "ru":
            output = "Привет!";
            break;
        case "de":
            output = "Gutten tag!";
            break;
        default:
            output = "Язык неизвестен";
    };
    
    return output;
};