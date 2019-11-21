import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {CustomizedMeme} from './mememuc';
import './mememuc-history.css';

interface HistoryProps {
  // TODO: props use to pass savedMemes
  savedMemes?: Array<CustomizedMeme>;
  onDeleteMeme: Function;
}

// The MemeMUCHistoryComponent is a horizontal bar located 
// at the webpage bottom
const OmmMemeMUCHistory: React.FC<HistoryProps> = (props) => {
  // TODO: this property should contain all saved memes, which already 
  // exists in the same-named parent component's property.

  let memes = props.savedMemes || []

  return (
    <div className="history-container">
      <h4>My Favorite Memes</h4>
      <div className="meme-history">
        {memes.map((el, idx) => (
          <div className="a-meme-history-item" key={idx}>
            <img src={el.link.href}></img>
            <DeleteIcon onClick={() => props.onDeleteMeme(idx)} />
          </div>
        ))}

        {/* 
        TODO: this container should contain the saved memes.
        TODO: each saved meme should be rendered as div container 
              containing an img tag (the meme itself) and a mat-icon 
              tag (delete icon)
        TODO: use the css class a-meme-history-item for a meme's 
              container in order to apply the provided styling */}
      </div>
    </div>
  )
};

export default OmmMemeMUCHistory;