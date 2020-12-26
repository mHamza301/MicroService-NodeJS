import React, { useState } from 'react';
import axios from 'axios';


export default ({ postId }) =>{
    const [content, setContent] = useState('');

    const onSubmitEventHandler = async event =>{
        
        event.preventDefault();
        await axios.post(`http://posts.com/posts/${postId}/comments`, { content });
        setContent('');
    };

    
    return(
        <div>
            <form onSubmit={onSubmitEventHandler}>
                <div className="form-group">
                    <label>Create Comment</label>
                    <input 
                    value={content} 
                    onChange={e =>setContent(e.target.value)} 
                    className="form-control" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );

};