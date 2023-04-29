import Image from 'next/image'

type ProductCardProps = {
  product: any
}

const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  return (
    <li key={product.id} className="h-44 bg-gray-500 flex gap-4">
      <Image
        className="object-cover w-60 cursor-pointer"
        width={100}
        height={100}
        alt="auto"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ford_Focus_I_Stufenheck_front_20101015.jpg/500px-Ford_Focus_I_Stufenheck_front_20101015.jpg"
      />

      <div className="flex flex-col">
        <h2 className="drop-shadow-sm text-2xl cursor-pointer">
          {product.title}
        </h2>
        <p>{product.description}</p>
        <p>{product.price} Euro</p>
      </div>
    </li>
  )
}

export default ProductCard
