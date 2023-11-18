import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyBooking from "../Components/MyBooking";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `https://luxury-hotels-server.vercel.app/booking?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDeleteBookings = (id) => {
    fetch(`https://luxury-hotels-server.vercel.app/booking/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok === 1) {
          // Update state after successful deletion
          const updatedBookings = bookings.filter(
            (booking) => booking._id !== id
          );
          setBookings(updatedBookings);
        } else {
          Swal.fire({
            icon: "success",
            title: "Booking deleted successfully!",
            showConfirmButton: true,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error deleting booking:", error);
      });
  };

  const handleUpdateBookings = (id, newDate) => {
    fetch(`https://luxury-hotels-server.vercel.app/booking/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date: newDate }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log("Booking updated successfully");

          fetch(`https://luxury-hotels-server.vercel.app/booking/${id}`)
            .then((res) => res.json())
            .then((updatedBooking) => {
              setBookings((prevBookings) => {
                const index = prevBookings.findIndex(
                  (booking) => booking._id === id
                );
                const updatedBookings = [...prevBookings];
                updatedBookings[index] = updatedBooking;
                return updatedBookings;
              });

              Swal.fire({
                icon: 'success',
                title: 'Updated Successfully!',
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .catch((error) => {
              console.error('Error updating booking:', error);
            });
        }
      })
      .catch((error) => {
        console.error("Error updating booking:", error);
      });
  };

  return (
    <div className="mx-2 md:mx-8 lg:mx-24">
      <h3 className="text-5xl font-bold text-[#E0B973] text-center py-8">
        Your Bookings
      </h3>
      <div>
        <table className="min-w-full bg-white border border-gray-300">
          {/* head */}
          <thead className="bg-gray-100 border-b">
            <tr>
              <td className="py-2 px-4 text-xl">Title</td>
              <td className="py-2 px-4 text-xl">Date</td>
              <td className="py-2 px-4 text-xl">Delete</td>
              <td className="py-2 px-4 text-xl">Update</td>
            </tr>
          </thead>
          <tbody>
            {bookings.map((myBooking, index ) => (
              <MyBooking
                key={myBooking._id}
                myBooking={myBooking}
                handleDeleteBookings={handleDeleteBookings}
                handleUpdateBookings={handleUpdateBookings}
                index={index}
              ></MyBooking>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
