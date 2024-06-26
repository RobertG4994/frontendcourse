import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { getInventoryData } from "../api/actions";
import React from "react";


const ProductCard: React.FC = () => {
const [data, setData] = useState<Item>();
const [loadingState, setLoadingState] = useState(false);
const [product, setProduct] = useState("");
const [error, setError] = useState("");

const handleSearch = () => {
  console.log("Fetching Product Data...");
  console.log(product);
  setLoadingState(true);
  getInventoryData(product)
    .then((res) => {
      setError("");
      if (res) {
        console.log(res);
        setData(res);
        setLoadingState(false);
      }
    })
    .catch((error) => {
      console.error(error);
      setLoadingState(false);
      setData(undefined);
      setError(error);
    });
};

return (
  <Card className="max-w-[400px]">
    <CardHeader className="flex gap-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <div className="flex flex-col w-full p-2 space-y-4">
          <Input
            id="productname"
            type="text"
            label="Product"
            value={product}
            onChange={(e) => {
              setProduct(e.target.value);
            }}
          />
          <Button
            className=""
            color="primary"
            isLoading={loadingState}
            type="submit"
          >
            Search Inventory
          </Button>
        </div>
      </form>
    </CardHeader>
    <Divider />
    {data ? (
      <CardBody>
        <div className="flex flex-col items-center">
          <h1 className="text-lg">ID: {data.id}</h1>
          <p className="text-lg">Name: {data.name}</p>
          <p className="text-lg">Stock: {data.numberOfItem}</p>
         
      
        </div>
      </CardBody>
    ) : (
      <CardBody>
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold">Please enter a product</p>
        </div>
      </CardBody>
    )}
    <Divider />
    <CardFooter>
      <div className="flex flex-col items-left">
        {error && <p className="text-xs text-red-600 ">{error}</p>}
        {data && (
          <p className="text-xs  text-gray-600 ">Last update successful.</p>
        )}
        {!data && (
          <p className="text-xs  text-gray-600 ">Waiting for input...</p>
        )}
      </div>
    </CardFooter>
  </Card>
);
};

export default ProductCard;
