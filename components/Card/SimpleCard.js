function SimpleCard(props) {
  return (
    <div className="container max-w-sm bg-white shadow-lg p-4 py-8 cursor-pointer hover:shadow-xl transition duration-500 rounded-lg ">
      <img className="object-center mx-auto text-center w-24 h-12 object-contain" src={props.cover} alt="cover item" />
      <h1 className="text-gray-700 hover:text-gray-900 hover:cursor-pointer text-center">{props.title}</h1>
      <h1 className="text-gray-700 hover:text-gray-900 text-xl font-bold hover:cursor-pointer text-center">{props.subtitle}</h1>
    </div>
  )
}

export default SimpleCard