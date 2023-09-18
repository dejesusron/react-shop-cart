import Products from "../Product";
import Card from "../components/Card";

const Home = () => {

  const products = Products.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="mt-16 px-3">

      <div className="text-center pt-16">
        <h1 className="text-4xl font-bold text-[#333]">Speed Will Kill You!</h1>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-y-12 px-4 mt-16 md:grid-cols-3 md:gap-x-8 md:gap-y-8 lg:gap-y-20 lg:gap-x-12 lg:container lg:mx-auto sm:grid-cols-2 sm:gap-x-8">
        {products}
      </div>
    </div>
  )
}

export default Home