import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './Routers'
import "./main.css"
import UserProvider from './contexts/UserContext'
import { BagProvider } from './contexts/BagContext'
import { PostProvider } from './contexts/PostContext'
import { LibraryProvider } from './contexts/LibraryContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <PostProvider>
      <LibraryProvider>
      <BagProvider>
  
        <UserProvider>
          <Routers />
        </UserProvider>
      </BagProvider>
      </LibraryProvider>
    </PostProvider>
  // </React.StrictMode>,
)
