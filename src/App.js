import React from 'react';
import './App.scss';
import marked from 'marked';

const codeblock=`<code><h1>
hello
</h1></code>`;

marked.setOptions({
  breaks: true
})

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      markdown:`## Welcome to Markdown Live Previewer \n
### This is an example \n Input your text here \n
# Header 1 \n## Header 2 \n### Header 3 \n## links \n
You may be using [Google](https://google.com/). \n
 ## Inline code \n` +"This web site is using `markedjs/marked`.\n" +
"''<h1> Header </h1>'' \n"+ `## Blocks of code \n`+
`\`\`\`\n ${codeblock}\n\`\`\`` +`
## Lists

### Unordered list

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered list

1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b
`+`
## Blockquotes 
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
\n` + 
`## Image \n`+` ![Image Preview.](https://scontent.famm7-1.fna.fbcdn.net/v/t1.6435-9/139106120_230006341916772_8472671773350483624_n.png?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fcHRB9cCjSYAX-Se8Vf&_nc_ht=scontent.famm7-1.fna&oh=60b646e6484fd2979338372e2a0f057f&oe=616E56F9 "This is a sample image.")
\n`+` ## Bold text
**This text will be bold**  
__This will also be bold__

`

};
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      markdown:event.target.value
    })
  }
  
  render(){
  return (
    <div className="App" id="fullApp" >
      <header className="App-header"  >
        <div>
        <h1 class="text-center" id="mainHeader" >Markdown Live Previewer</h1>
        </div> <br/>
        <div class="flex-container">
          <div id="div1"  >
          <h2  id="subHeader">Markdown Input</h2>
          <div>
            <textarea rows="23" cols="40" id="editor" class="form-control" value={this.state.markdown} onChange={this.handleChange}>
            </textarea>
          </div>
          </div>
          <div id="div2" >
            <h2 class="col-auto text-center" id="subHeader">Preview</h2>
            <div id="preview" class="form-control col-auto" dangerouslySetInnerHTML={{__html:marked(this.state.markdown)}}></div>
            </div>

        </div>             
        
        
      </header>
      <footer id="footer">Markdown Previewer Done By Amani Younis</footer>

    </div>
  );
}
}

export default App;
