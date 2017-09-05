function gebi(id)
{
  return document.getElementById(id);
}

class node{
 constructor(data)
 {
     this.data=data;
     this.next=null;
 }
};
class stack_t{
    constructor()
    {
        this.head=null;
        this.size=0;
    }
    push(data)
    {
        if(this.head!=null){
            var newnode=new node(data);
            newnode.next=this.head;
            this.head=newnode;
            delete window.newnode;
        }
        else{
            this.head=new node(data);
        }
        ++(this.size);
    }
    pop()
    {
        if(this.head!=null){
            var save=this.head;
            delete window.head;
            this.head=save.next;
            delete window.save;
            --(this.size);
        }
        else{
          head=null;
          document.write("Underflow encountered!<br>");
        }
    }
};
stack=new stack_t();
document.write("Pushing into stack<br>");
for(x=0;x<10;x++){
  stack.push(x+1);
  document.write(stack.head.data+"<br>");
}
document.write("Poping from stack<br>")
for(x=0;x<10;x++){
    //document.write(x+1);
    document.write(stack.head.data+"<br>");
    stack.pop();
}
var ta=gebi("text"),db=gebi("debugBar");
ta.style.width=(window.screen.width-20)+"px";
ta.style.height="50px";
function dispDgb(x)
{
	db.innerHTML="";
	text=document.createTextNode(x);
	db.appendChild(text);
}
ta.onkeypress=function display(evt)
{
    var keynum;
            
      keynum = evt.keyCode||evt.which;

    if(String.fromCharCode(keynum)=="<"){
		var newspan=document.createElement("SPAN");
		var insideText="";
		if(String.fromCharCode(keynum)==">"){
			ta.onkeypress=display(evt);
		}
		else{
			ta.onkeypress=function (evt){
				keynum=evt.keyCode||evt.which;
				insideText+=String.fromCharCode(keynum);
				var tn=document.createTextNode(insideText);
				dispDgb(insideText);
				if(String.fromCharCode(keynum)==">"){
					newspan.appendChild(tn);
					db.appendChild(newspan);
					ta.onkeypress=display(evt);
		}
			}
		}
	}
	else{
		dispDgb(ta.value);
	}
}
