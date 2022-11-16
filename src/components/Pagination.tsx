import React, { useEffect, useRef } from "react";

interface CustomProps {
  onSetCurrentPage: (page: number) => void;
  onFetchData: () => void;
  currentPage: number;
  prevPage: number;
  dataList: any[];
  reachMaxLimit: boolean;
}

const Pagination = ({
  onSetCurrentPage,
  onFetchData,
  currentPage,
  prevPage,
  dataList,
  reachMaxLimit,
  children,
}: React.PropsWithChildren<CustomProps>) => {
  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        onSetCurrentPage(currentPage + 1);
      }
    }
  };
  useEffect(() => {
    if (!reachMaxLimit && prevPage !== currentPage) {
      onFetchData();
    }
  }, [currentPage, reachMaxLimit, prevPage]);
  
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onScroll, listInnerRef, dataList });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};

export default Pagination;
