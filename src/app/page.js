import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { LuThumbsUp } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";

export default function Home() {
  return (
    <main>
      {/* Header Wrapper Start */}
      <header className={`${styles.header__wrapper} pt-5`}>
        <div className="container pt-md-4">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-5 fw-medium mb-3 text-dark">Find a Top Academic <br /> Expert for Your Project</h1>
              <p className="lead-sm mb-3 mb-sm-4 text-dark"><b>EDUCATECH</b> is an exclusive platform featuring top academic experts across diverse fields. Whether it&apos;s a personal or institutional project</p>
              <div className="d-flex gap-3">
                <Link href="#" className="btn btn-primary">Find an Expert</Link>
                <Link href="#" className="btn btn-outline-primary">Become an Expert</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/images/common/hero-thumbnail.png"
                alt="Hero Image"
                width={700}
                height={533}
                className={`${styles.hero__thumbnail} img-fluid w-100 object-fit-contain`}
              />
            </div>
          </div>
        </div>
      </header>
      {/* Header Wrapper End */}

      {/* Search Wrapper Start */}
      <div className="py-5 text-center">
        <div className="container py-md-4">
          <div className="">
            <p className="top__title text-center text-primary">Require steps</p>
            <h2 className="text-center fs-2">Search Academic Expert Made Easy</h2>
            <p>We are the largest, globally connected network of top academic talent, and we're prepared to tackle your most critical projects.</p>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-3 col-sm-6">
              <div className="require-block">
                <div className="mb-3">
                  <HiOutlineAcademicCap className="display-3 text-primary" />
                </div> 
                <div className="require-text">
                  <h3 className="fs-5">Post Academic <br/> Projects</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet maiores eos suscipit asperiores error!</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="require-block">
                <div className="mb-3">
                  <MdOutlineMarkEmailRead className="display-3 text-primary" />
                </div> 
                <div className="require-text">
                  <h3 className="fs-5">Receive Project <br/> Interest</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet maiores eos suscipit asperiores error!</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="require-block">
                <div className="mb-3">
                  <LuThumbsUp className="display-3 text-primary" />
                </div> 
                <div className="require-text">
                  <h3 className="fs-5">Select the Best <br/> Match for you</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet maiores eos suscipit asperiores error!</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="require-block">
                <div className="mb-3">
                  <MdSecurity className="display-3 text-primary" />
                </div> 
                <div className="require-text">
                  <h3 className="fs-5">Pay <br/> Security</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet maiores eos suscipit asperiores error!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search Wrapper End */}




    </main>
  );
}
