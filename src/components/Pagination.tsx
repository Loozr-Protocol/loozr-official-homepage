import { Spinner } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

interface CustomProps {
  onSetCurrentCursor: () => void;
  onFetchData: () => void;
  currentCursor: string;
  nextCursor: string;
  dataList: any[];
  reachMaxLimit: boolean;
}

const Pagination = ({
  onSetCurrentCursor,
  onFetchData,
  currentCursor,
  nextCursor,
  dataList,
  reachMaxLimit,
  children,
}: React.PropsWithChildren<CustomProps>) => {
  // const listInnerRef = useRef();

  // const onScroll = () => {
  //   if (listInnerRef.current) {
  //     const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
  //     if (scrollTop + clientHeight === scrollHeight) {
  //       onSetCurrentCursor();
  //     }
  //   }
  // };
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('Getting recalled');
    if (!reachMaxLimit && nextCursor === currentCursor) {
      onFetchData();
    }
  }, [currentCursor, reachMaxLimit, nextCursor]);

  const handleLoadMore = () => {
    setLoading(true)

    onSetCurrentCursor();
    onFetchData();
    setLoading(false)
  };

  // const childrenWithProps = React.Children.map(children, (child) => {
  //   if (React.isValidElement(child)) {
  //     return React.cloneElement(child, { onScroll, listInnerRef, dataList });
  //   }
  //   return child;
  // });

  const childrenWithProps = React.Children.map(children, (child) =>
    React.isValidElement(child) ? React.cloneElement(child, { dataList }) : child
  );

  return (
    <>
      {childrenWithProps}
      {!reachMaxLimit && (
        <div className="w-full grid place-items-center mt-6">
          <div className="bg-[#141922] hover:bg-[#536079] text-white font-semibold py-2 px-8 rounded-[24px] mb-[40px]" onClick={handleLoadMore}>{loading ? <Spinner /> : 'Load More'}</div>
        </div>
      )}
    </>
  );
};

export default Pagination;
