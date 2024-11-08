import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" mx-auto text-center h-[calc(100vh-69px)] flex items-center justify-center flex-col">
        <h1 className="italic text-6xl font-bold">Hyper ⚡️tudy Force</h1>{" "}
        {/* Add a Full text logo here */}
        <p className="text-3xl max-w-[600px] mt-8">
          Study topics of your choice by chatting with AI directly or by using
          your own PDF books and notes
        </p>
      </div>
    </>
  );
}
