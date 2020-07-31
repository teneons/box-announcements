import React from 'react';

export default function ModalAdd () {

    const styleInputTitle = {
        border: 'none',
        fontSize: '4vh'
    }

    const postDate = () => {
        let d = new Date();
        let day = d.getDate();
        let month = d.getMonth() +1;
        let year = d.getFullYear();

        let fullDate = `${day}.${month}.${year}`;
        return fullDate;
    }
    

    return (
        <div className="modal fade" id="ModalAdd" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={false}>
        <div className="modal-dialog modal-dialog-centered">
            <form className="modal-content form-group">
            <div className="modal-header">
                <input style={styleInputTitle} className="modal-title form-control font-weight-bold" type='text' placeholder='Title announcement' id="exampleModalLabel" />
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <span className='card-subtitle mb-2 text-muted right-align'>Date post: <span className='font-weight-bold'>{postDate()}</span></span>
            </div>
            <div className="modal-footer d-flex justify-content-center">
                <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-warning text-uppercase">Post</button>
            </div>
            </form>
        </div>
        </div>
        )
}
