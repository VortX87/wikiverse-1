import React, { useState, useEffect } from 'react';
import apiURL from '../api'

export const Page = ({ page }) => {

  const [pageDetails, setPageDetails] = useState({})

  async function fetchDetails() {
    try {
      const response = await fetch(`${apiURL}/wiki/${page.slug}`)
      const pageData = await response.json()
      setPageDetails(pageData)
      console.log(pageData)
    } catch (err) {
      console.log("Oh no an error!", err)
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [])


  return <>
    <h3>{page.title}</h3>
  </>
}
