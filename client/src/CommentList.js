import React from 'react';


export default ({ comments }) =>{
    const renderedComments = comments.map(comment =>{
        let content;

        if(comment.status === 'Approved'){
            content = comment.content;
        }

        if(comment.status === 'Pending'){
            content = 'This comment is awaiting Moderation';
        }

        if(comment.status === 'Rejected'){
            content = 'This comment is rejected. Please be ethical.'
        }
        
        return (
            <li key={comment.id}>
                {content}
            </li>
        );
    });

    return (
        <ul>
            {renderedComments}
        </ul>
    );
};