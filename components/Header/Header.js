function Header(props){
  return(
    <>
    <h1 className="container text-2xl ml-4 md:ml-12 mt-4 font-medium italic">{props.nameStore}</h1>
    </>
  )
}

export default Header