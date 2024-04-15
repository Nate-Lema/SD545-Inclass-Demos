import { title } from 'process'
import React, { ChangeEvent, useRef } from 'react'

export default function AddProduct() {
    const titleInputValue = (e:ChangeEvent<HTMLInputElement>)=>{

    }
    "I  love you "
            'I love you more'
    const titleInput = useRef('')

    const addProduct =()=>{

    }

    return (
        <div><h2>Add a new Product</h2>
            <form onSubmit={AddProduct}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input className="form-control" id="title" ref={titleInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows={3}></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form></div>
    )
}
