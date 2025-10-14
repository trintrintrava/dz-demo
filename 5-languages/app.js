function translator(lang) {
    
    let output ="";

    switch (lang) {
        case "en": 
            output = "Hello!";
            break;
        case "ru":
            output = "Привет!";
            break;
        default:
            output = "Язык неизвестен";
    };
    
    return output;
};