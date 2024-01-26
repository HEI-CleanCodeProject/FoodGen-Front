"use client"
import React from "react"

export default function Error( {error} ){
  return(
    <>{error.reason}</>
  )
}