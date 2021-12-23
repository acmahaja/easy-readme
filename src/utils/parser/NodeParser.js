class NodeHeaderParser {
  static regex = /^(#{1,6}\s).*/;
  static regexAltH1 = /^(.*\n)(=+)$/;
  static regexAltH2 = /^(.*\n)(-+)$/;

  static check(message) {
    return this.regex.test(message) || this.regexAltH1.test(message) || this.regexAltH2.test(message);
  }
  
  static generate(message){
    if(!this.check(message))
        throw new Error("String passed isn't valid")
    
      
    return message.replace(/^#\s(.*$)\n/m, '<h1>$1</h1>')
                  .replace(/^#{2}\s(.*$)\n/m, '<h2>$1</h2>')
                  .replace(/^#{3}\s(.*$)\n/m, '<h3>$1</h3>')
                  .replace(/^#{4}\s(.*$)\n/m, '<h4>$1</h4>')
                  .replace(/^#{5}\s(.*$)\n/m, '<h5>$1</h5>')
                  .replace(/^#{6}\s(.*$)\n/m, '<h6>$1</h6>')
                  .replace(/^(.*)(\n=+)/m, '<h1>$1</h1>')
                  .replace(/^(.*)(\n-+)/m, '<h2>$1</h2>')


  }

}

// console.log(NodeHeaderParser.check("# This is a h1\n"));
// console.log(NodeHeaderParser.check("## This is a h2\n"));
// console.log(NodeHeaderParser.check("### This is a h3\n"));
// console.log(NodeHeaderParser.check("#### This is a h4\n"));
// console.log(NodeHeaderParser.check("##### This is a h5\n"));
// console.log(NodeHeaderParser.check("###### This is a h6\n"));

// console.log(NodeHeaderParser.check("This is a h1\n==="));
// console.log(NodeHeaderParser.check("This is a h2\n==="));


// console.log(NodeHeaderParser.generate("# This is a h1\n"));
// console.log(NodeHeaderParser.generate("## This is a h2\n"));
// console.log(NodeHeaderParser.generate("### This is a h3\n"));
// console.log(NodeHeaderParser.generate("#### This is a h4\n"));
// console.log(NodeHeaderParser.generate("##### This is a h5\n"));
// console.log(NodeHeaderParser.generate("###### This is a h6\n"));
// console.log(NodeHeaderParser.generate("This is a h1\n==="));
// console.log(NodeHeaderParser.generate("This is a h2\n-----"));