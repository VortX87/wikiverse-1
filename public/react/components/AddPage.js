import React, { useState, useEffect } from 'react';
import apiURL from '../api'

export function AddPage() {
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [content, setContent] = useState('')
    const [tag, setTag] = useState('')
    const [status, setStatus] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(title)
        await fetch(`${apiURL}/wiki/`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: title, content: content, slug: slug })
        })
        setTitle('')
        setSlug('')
        setContent('')
        setTag('')
        setStatus('')
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <p>Enter the details of your article</p>
                <div><input type='text' placeholder='title' value={title} onChange={e => setTitle(e.target.value)} /></div>
                <div><input type='text' placeholder='url' value={slug} onChange={e => setSlug(e.target.value)} /></div>
                <div><input type='text' placeholder='content' value={content} onChange={e => setContent(e.target.value)} /></div>
                <div><input type='text' placeholder='tag' value={tag} onChange={e => setTag(e.target.value)} /></div>
                <div>
                    <select value={status} onChange={e => setStatus(e.target.value)}>
                        <option value='Open'>Open</option>
                        <option value='Closed'>Closed</option>
                    </select></div>

                <button type='submit'>Submit</button>
            </form>
        </main >
    )
}