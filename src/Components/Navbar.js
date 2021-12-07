import React, {useState}from 'react'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import DownloadIcon from '@mui/icons-material/Download';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import FormatBoldIcon from '@mui/icons-material/FormatBold';

export default function Navbar(props) {
    const [textinput, settextinput] = useState("")
    const changetext = (event)=>{
        settextinput(event.target.value)
    }
    const new_ = ()=>{
        settextinput("")
    }
    const open_ = ()=> {
        let input = document.querySelector('input[type="file"]')
        document.getElementById("openfileInput").click()
        input.addEventListener('change', function(e){
            const reader = new FileReader()
            reader.readAsText(input.files[0])
            reader.onload = function(){
                settextinput(reader.result)
            }
        }, false)
    }
    const save_ = ()=>{
        const element = document.createElement("a");
        const file = new Blob([textinput], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "OnlineNotepad.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }
    const new_tab_ = ()=>{
        window.open("https://online-notepad-exe.herokuapp.com/");
    }
    const cut_ = ()=>{
        navigator.clipboard.writeText(textinput);
        settextinput("")
    }
    const paste_ = async ()=> {
        let a = await navigator.clipboard.readText()
        settextinput(textinput+a)
    }
    const selectAllText = () => {
        let a = document.getElementById("box");
        a.focus();
        a.select();
    };
    var a = 1;
    const bold_ =()=>{
        if (a === 1){
            a = a+1;
            document.getElementById("box").style.fontWeight = 'bold';
        }
        else{
            a = a-1;
            document.getElementById("box").style.fontWeight = 'normal';
        }
    }
    var b = 1;
    const italic_ =()=>{
        if (b === 1){
            b = b+1;
            document.getElementById("box").style.fontStyle = 'italic';
        }
        else{
            b = b-1;
            document.getElementById("box").style.fontStyle = 'normal';
        }
    }
    var c = 1;
    const underline_ =()=>{
        if (c === 1){
            c = c+1;
            document.getElementById("box").style.textDecoration = 'underline';
        }
        else{
            c = c-1;
            document.getElementById("box").style.textDecoration = 'none';
        }
    }
    const font_size_ =()=>{
        var e = document.getElementById("font_size");
        var strUser = e.value;
        document.getElementById("box").style.fontSize = strUser;
    }
      return (
          <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id="account">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            File
                        </a>
                        <ul className="dropdown-menu active" aria-labelledby="navbarDropdown">
                            <li><button className="dropdown-item" onClick={new_} title="New File"><img loading="lazy" src="https://icon-library.com/images/icon-new/icon-new-23.jpg" alt="idk" width="30" />  New</button></li>
                            <input id="openfileInput" type="file" className="inputopen" />
                            <li><button className="dropdown-item" onClick={open_} title="Open File"><img loading="lazy" src="https://www.vhv.rs/dpng/d/52-524483_open-file-icon-png-transparent-png.png" alt="idk" width="25" />    Open</button></li>
                            <li><button className="dropdown-item" onClick={save_} title="Save File"><img loading="lazy" src="https://image.flaticon.com/icons/png/512/25/25398.png" alt="idk" width="20" />     Save</button></li>
                            <li><button className="dropdown-item" onClick={new_tab_} title="Open a New Tab"><img loading="lazy" src="https://static.thenounproject.com/png/3629744-200.png" alt="idk" width="20" />New Tab</button></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Edit
                        </a>
                        <ul className="dropdown-menu active" aria-labelledby="navbarDropdown">
                            <li><button className="dropdown-item" onClick={cut_} title="Cut Text"><img loading="lazy" src="https://w7.pngwing.com/pngs/696/896/png-transparent-gray-scissors-illustration-logo-scissors-cut-logo-scissors-application-thumbnail.png" alt="idk" width="25" />Cut</button></li>
                            <li><button className="dropdown-item" onClick={() =>  navigator.clipboard.writeText(textinput)} title="Copy Text"><img loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LllqQAm9HgKv8aiJogJCgcCE_YZF6Wy3k9T2sLg5xG6aQMlJ4M8Zr1_RRvq1i1kTgsU&usqp=CAU" alt="idk" width="25" />Copy</button></li>
                            <li><button className="dropdown-item"  onClick={paste_} id="paste_" title="Paste Text"><img loading="lazy" src="https://e7.pngegg.com/pngimages/124/792/png-clipart-computer-icons-cut-copy-and-paste-clipboard-icon-design-font-symbol-miscellaneous-text.png" alt="idk" width="25" />Paste</button></li>
                            <li><button className="dropdown-item" onClick={selectAllText}  title="Select All"><img loading="lazy" src="https://cdn-icons-png.flaticon.com/512/60/60833.png" alt="idk" width="25" />Select All</button></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="white"></div>
        <div title="Open File">
            <FolderOpenIcon onClick={open_} className="abcd"></FolderOpenIcon>
        </div>
        <div title="Save File">
            <DownloadIcon onClick={save_} className="abcd1"></DownloadIcon >
        </div>
        <div title="Cut Text">
            <ContentCutIcon onClick={cut_} className="abcd2"></ContentCutIcon >
        </div>
        <div title="Copy Text">
            <ContentCopyIcon onClick={() =>  navigator.clipboard.writeText(textinput)} className="abcd3"></ContentCopyIcon >
        </div>
        <div className="hr1" />
        <div title="Paste Text">
            <ContentPasteIcon onClick={paste_} className="abcd4"></ContentPasteIcon>
        </div>
        <div title="Make Text Bold">
            <FormatBoldIcon onClick={bold_} className="abcd5" />
        </div>
        <div title="Make Text Italic">
            <FormatItalicIcon onClick={italic_} className="abcd6" />
        </div>
        <div title="Make Text Underlined">
            <FormatUnderlinedIcon onClick={underline_} className="abcd7" />
        </div>
        <div className="hr2" />
        <p className="abcd8">Font Size: </p>
        <select className="abcd9" title="Change Font Size" id="font_size" onClick={font_size_}>

        <option value="16px">
                       16px
        </option>
        <option value="2px">
                       2px
        </option>
        <option value="4px">
                       4px
        </option>
        <option value="8px">
                       8px
        </option>
        <option value="9px">
                       9px
        </option>
        <option value="10px">
                       10px
        </option>
        <option value="11px">
                       11px
        </option>
        <option value="12px">
                       12px
        </option>
        <option value="14px">
                       14px
        </option>
        <option value="16px">
                       16px
        </option>
        <option value="18px">
                       18px
        </option>
        <option value="20px">
                       20px
        </option>
        <option value="22px">
                       22px
        </option>
        <option value="24px">
                       24px
        </option>
        <option value="26px">
                       26px
        </option>
        <option value="28px">
                       28px
        </option>
        <option value="36px">
                       36px
        </option>
        <option value="48px">
                       48px
        </option>
        <option value="72px">
                       72px
        </option>
        
        </select>
        
    <textarea className="notes" onChange={changetext} id="box" autoFocus="" value={textinput} cols="51"></textarea>
    
        </div>
    )
}




