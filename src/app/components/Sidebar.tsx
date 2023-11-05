"use client";
import React, { useState , ChangeEvent} from "react";
import { GoSearch } from "react-icons/go";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import Breadcrumbs from "./Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { removeSelectedFilterOption, selectFilterOption, filterData } from "../redux/features/dataSlice";
import Shimmersidebar from "./shimmer/Shimmersidebar";

const Sidebar = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.dataReducer);
  const toggleAccordion = (index: number) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };
  const [searchText, setSearchText] = useState("");

  const [showMore, setShowMore] = useState(false);
  const initialLimit = 8;
  const handleShowMore = () => {
    setShowMore(state=> !state);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    dispatch(filterData(e.target.value));
  }
  const handleFilterChange=(e:ChangeEvent<HTMLInputElement>)=> {
    if (!e.target.checked) {
      dispatch(removeSelectedFilterOption(e.target.value));
    } else {
      dispatch(selectFilterOption(e.target.value))
    }

  }
  const breadcrumbsData = [
    { label: "Home", href: "/" },
    { label: "Artifacts", href: "/artifacts" },
  ];

  return (
    <aside className="w-64 hidden md:block  p-4">
      {(data.filterData.length === 0 || data.loading) && !data.error && !data.data.length &&  (
        <Shimmersidebar />
      )}
      {!data.loading && data.data.length > 0 && (
        <>
          <Breadcrumbs breadcrumbs={breadcrumbsData} />
          <div>
            {data.filterOption.map((accordion, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full flex bg-none p-2 text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  {activeAccordion === index ? (
                    <VscChevronUp className="mx-2 mt-1" />
                  ) : (
                    <VscChevronDown className="mx-2 mt-1" />
                  )}
                  {accordion.title}
                </button>
                {activeAccordion === index && (
                  <>
                    <div className="mb-4 relative">
                      <input
                        type="text"
                        placeholder={" Search from " + accordion.title}
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none pl-10 "
                        value={searchText}
                        onChange={handleSearch}
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <GoSearch className="text-gray-500" />
                      </div>
                    </div>
                    <div className="p-4">
                      {accordion.items
                        .slice(
                          0,
                          showMore ? accordion.items.length : initialLimit
                        )
                        .map((item, index) => {
                          return (
                            <label
                            key={index}
                            className="flex items-center mb-2 text-gray-500 text-sm"
                          >
                            <input
                              value={item}
                              type="checkbox"
                              onChange={handleFilterChange}
                              checked={data.selectedFilter.indexOf(item.toString() as never) > -1}
                              className="h-5 w-5 mx-2 rounded border border-gray-300 focus:ring-gray-400 focus:ring-offset-gray-100"
                            />{" "}
                            {typeof(item) !== "number" && item.length > 20 ? item.substring(0, 17) + "...": item }
                          </label>
                          );
                        })}
                      {accordion.items.length > initialLimit && (
                        <button
                          onClick={handleShowMore}
                          className="show-more-button text-[#B57A50] text-[13px]  font-semibold leading-5 tracking-[2.08px] uppercase"
                        >
                         {!showMore ? `+ ${accordion.items.length - initialLimit} more` : 'Show less'}
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
