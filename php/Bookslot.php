<?php

$name=$_POST["name"];
$phone=$_POST["phone"];
$date=$_POST["date"];
$time=$_POST["time"];
$seat=$_POST["seat"];
$items=$_POST["item"];
$total=$_POST["total"];

$data = "Name: $name\nPhone: $phone\nSeat: $seat\nDate: $date\nTime: $time\nItems: $items\n------\n";

file_put_contents("bookings.txt", $data, FILE_APPEND);

?>

<html>
    <head>
        <style>
            h2,p{

                    text-align:center;
            }

            .confirm-btn-reminder
            {

                  border-radius:12px;
    color: #3b5fbf;
    box-shadow: 0 8px 18px rgba(0,0,0,0.1);

    border:none;
    padding:10px;
    cursor:pointer;
    font-size:16px;

    margin-left:390px;
            }



        </style>

</head>

<h2>🎉 Booking Confirmed</h2>

<p>Thank you <?php echo $name; ?>!</p>
<p>Your seat is booked.</p><br><br>

<a class="confirm-btn-reminder"  href="Home.html">Go back to main page</a>

                                    
                                        


</html>