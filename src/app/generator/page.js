import Card from "@components/generator/card"
import Navbar from "@components/generator/navbar"

export default function () {
  return(
    <>
      <Navbar />
      <div className="p-2">
        <div>
          <h3 className="p-3">Recommended for you</h3>
          <div className="flex row">
            <Card />
          </div>
        </div>
        <hr className="bg-color-2 w-4/5 m-6"/>
        <div className="flex row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}