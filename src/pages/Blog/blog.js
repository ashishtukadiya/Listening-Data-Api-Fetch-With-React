import { Button, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import IconService from "../../utils/Icon";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogPage } from "../../Store/Reducer/blogslice";
// import { useDispatch, useSelector } from "react-redux";

const Blog = () => {
  const img_Url = "http://3.7.81.243:3253/uploads/blog/";
  const dispatch = useDispatch();
  const { blogPageList } = useSelector(
    (state) => state.blogslice
  );
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(fetchBlogPage());
  }, [dispatch]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const services = [
    {
      id: "customers",
      name: "Josh brollins",
      image: IconService.profile,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: "agents",
      name: "Josh brollins",
      image: IconService.profile,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];

  return (
    <div id="blogs" className="container flex flex-col gap-[40px]">
      <Typography className="!font-bold  !mt-[100px] !text-[27px]">
        Testimonials
      </Typography>

      <div className="flex flex-row gap-10">
        {services.map((item, id) => (
          <Card
            style={{
              borderRadius: "10px",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)",
            }}
            key={id}
            className="px-[1.25rem] pt-10 pb-[23px] flex flex-col justify-between gap-y-[3.5rem]"
          >
            <div className="learn-card-div flex flex-col  justify-center gap-y-[1.8rem] ">
              <div className="flex flex-row items-center gap-5 ">
                <img
                  width={121}
                  height={121}
                  src={item.image}
                  alt="card1icon"
                  loading="lazy"
                />
                <Typography
                  variant="subtitle1"
                  className="text-center !font-bold  !text-[22px]"
                >
                  {item.name}
                </Typography>
              </div>
              <div className="text-center">
                <Typography variant="h6" className="">
                  {item.description}
                </Typography>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-row justify-between !mt-[180px] items-center">
        <Typography className="!font-bold   !text-[27px]">Blog</Typography>
        <Button onClick={toggleShowAll}>
          {showAll ? "View less" : "View all"}
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {(showAll ? blogPageList?.data : blogPageList?.data?.slice(0, 3))?.map(
          (item, id) => (
            <div
              key={id}
              className="px-[1.25rem] pt-10 pb-[23px] flex flex-col justify-between gap-y-[3.5rem]"
            >
              <div className="learn-card-div flex flex-col  justify-center items-center gap-5 ">
                <img
                  src={`${img_Url}${item.image}`}
                  alt="card1icon"
                  className="w-full"
                  width={100}
                  height={100}
                  loading="lazy"
                />

                <div className="!text-center">
                  <Typography
                    variant="subtitle1"
                    className="text-start !font-bold  !text-[22px]"
                  >
                    {item.name}
                  </Typography>
                  <div className="flex flex-row gap-1">
                    <Typography variant="h6" className="text-[#D0021B]">
                      {item.description1}
                    </Typography>
                    <Typography className=" flex justify-center items-center ">
                      {item.name}
                    </Typography>
                  </div>
                  <Typography>
                    {" "}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.short_description,
                      }}
                    />
                  </Typography>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Blog;
