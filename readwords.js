var censor=require("censorify");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad,bad and mad text."));
censor.addCensorWord("gloomy");
console.log(censor.getCensorWords());
console.log(censor.censor("A very gloomy day"));
