const introduction = (name) => {
    return `Hi, my name is ${name}.`;
};
//console.log(introduction("Mike"));

const introductionWithLanguage = (name, language) => {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
};
//console.log(introductionWithLanguage("Mike", "JavaScript"));

const introductionWithLanguageOptional = (name, language = "JavaScript") => {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
};
console.log(introductionWithLanguageOptional("Gracie", ));