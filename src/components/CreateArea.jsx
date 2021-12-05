import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import CloseIcon from '@material-ui/icons/Close';
import PaletteIcon from '@material-ui/icons/Palette';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    color: "transparent"
  });
  const [condition,setCondition]=useState(false);
  const [colorName, setcolorName] = useState("transparent"); //selecting from the color pallate
  const [open, setOpen] = useState(false);

  function handleCondition()
  {
      setCondition(true);
  }

  function handleClickOpen(event)
  {
    event.preventDefault();
    setOpen(true);
  }

  function handleClickClose()
  {
    setOpen(false);
  }
  
  function handleContent(event)
  {
    const {name,value}=event.target;
    setNote(prevValue=>{
      if(name==="title")
      {
        return{
          title: value,
          content:prevValue.content,
          color:prevValue.color
        };
      }
      else if(name==="content")
      {
        return{
          title: prevValue.title,
          content: value,
          color: prevValue.color
        };
      }
    });
  }

  function handleSubmit(event)
  {
    event.persist();
    event.preventDefault();  
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      color:"transparent"
    });
    setcolorName("transparent");
    setCondition(false);
  }

  function handleColorChange(event) 
  {
    setcolorName(event.target.value);
  }

  function handleColorClick(event) 
  {
    event.persist();
    event.preventDefault();
    if (colorName === "transparent") 
    {
      setNote(prevValue=>{
        return{
            title: prevValue.title,
            content:prevValue.content,
            color: "transparent"
          };
      })
    }
    else if (colorName === "blue") 
    {
      setNote(prevValue=>{
        return{
            title: prevValue.title,
            content:prevValue.content,
            color: "#1f3f5a"
          };
      })
    }
    else if (colorName=== "red")
    {
      setNote(prevValue=>{
        return{
            title: prevValue.title,
            content:prevValue.content,
            color: "#5b2245"
          };
      })
    } 
    else if (colorName === "green")
    {
      setNote(prevValue=>{
        return{
            title: prevValue.title,
            content:prevValue.content,
            color: "#345920"
          };
      })
    } 
    else if (colorName === "orange") 
    {
      setNote(prevValue=>{
        return{
            title: prevValue.title,
            content:prevValue.content,
            color: "#5c2b29"
          };
      })
    }
  }
  function handleClose()
  {
    setNote({
      title: "",
      content: "",
      color:"transparent"
    });
    setcolorName("transparent");
    setCondition(false);
  }
  return (
    <div>
      <form style={{backgroundColor: note.color}} className="create-note">
        
        {condition?
          <input 
            style={{backgroundColor: note.color}}
            onChange={handleContent} 
            name="title" 
            placeholder="Title" 
            value={note.title} 
          />
        :null}
        
        <textarea 
          style={{backgroundColor: note.color}}
          onChange={handleContent} 
          name="content" 
          placeholder="Take a note..." 
          rows={condition?"3":"1"} 
          value={note.content} 
          onFocus={handleCondition}
        />
        
        {condition?
          <Zoom in={true}> 
            <Fab onClick={handleSubmit}>
              <AddIcon />
            </Fab>
          </Zoom>
        :null}
        
        {condition?
          <Zoom in={true}>
            <Fab
              className="btn-color-pallete" 
              onClick={handleClickOpen}>
                <PaletteIcon style={{fontSize:"30px"}} />
            </Fab>
          </Zoom>
        :null}

        <Dialog open={open} onClose={handleClickClose}>
            <DialogTitle className="dialog-title">Choose Colour</DialogTitle>
            <DialogContent className="dialog-content">
              <select className="color-pallete" onChange={handleColorChange} onClick={handleColorClick} style={{width:"100%", height:"3em", fontSize:"16px"}}>
                  <option value="transparent">Default</option>
                  <option style={{backgroundColor: "#1f3f5a"}} value="blue">Blue</option>
                  <option style={{backgroundColor: "#5b2245"}} value="red">Red</option>
                  <option style={{backgroundColor: "#345920"}} value="green">Green</option>
                  <option style={{backgroundColor: "#5c2b29"}} value="orange">Orange</option>
              </select>
            </DialogContent>
        </Dialog>
        
        {condition?
          <Zoom in={true}> 
            <Fab className="close-note"onClick={handleClose}>
            <CloseIcon />
            </Fab>
          </Zoom>
        :null}
      </form>
    </div>
  );
}

export default CreateArea;
