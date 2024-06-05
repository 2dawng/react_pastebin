import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onFileChanged = (e) => setFile(e.target.value)

  const onSavePostClicked = () => {
    //
    if (title === '' && content === '') {
      alert('Title and context could leave blank')
      return
    }

    dispatch(
      postAdded({
        id: nanoid(),
        title,
        content,
      }),
    )

    setTitle('')
    setContent('')
  }

  return (
    <div className='container col-9'>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <br />
        <label htmlFor="postContent">Content:</label>
        <div>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          /></div>
        <input
          type="file"
          id="postFile"
          name="postFile"
          value={file}
          onChange={onFileChanged} />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </div>
  )
}
