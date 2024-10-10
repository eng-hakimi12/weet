function WeTree(){
    return <div>
        <div className="h-[1000px]  bg-[url(https://img.freepik.com/free-psd/white-isolated-sweater-front-back_125540-2163.jpg?ga=GA1.1.417579876.1715515864&semt=sph)] bg-no-repeat w-[full] h-[500px ] ">
    <div className="flex justify-between ml-9 mr-9 mt-5 ">
        <h1 className="text-[20px] font-bold">WeTree</h1>
        <ul className="flex gap-10 text-[20px]">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Blog</li>
        </ul>
        <div className="flex gap-10">
            <button className="rounded-[30px] bg-green-500 w-20 h-8 text-white">Log in</button>
            <button className="rounded-[30px] bg-white w-20 h-8 text-green-500">Sign Up</button>
        </div>
        <div className="flex gap-5 w-10 h-6 mr-10">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        </div>
    </div>
    <div className="border-b-4 mt-6"></div>
    <div>
    </div>
<div>

    <h1 className="text-[100px] font-bold ml-[500px] mt-9">Garden as an</h1>
    <h1 className="text-[100px] font-bold ml-[600px]"> Art Form</h1>
    <p className="ml-[400px] text-[20px] font-bold"> Take advantage of garden maintenance, landscaping, tree surgery and more other services, <br /> provided to you by a group of educated and highly experienced professionals.</p>
    <button className="ml-[600px] mt-8 text-[20px] font-bold w-[140px] rounded-[10px] h-10 bg-red-300">Contact us </button>
    <button className="ml-[100px] mt-8 text-[20px] font-bold w-[140px] rounded-[10px] h-10 bg-red-300">Learn more </button>

    <div className=" flex justify-between pl-10 pr-8 font-bold text-2xl  pt-10 h-[200px] mt-20 w-[1300px] ml-[250px] bg-blue-100">
        <div className="border-r-4 border-indigo-500 pr-8" >
        <h1 className=" font-bold text-3xl">18 <span className="text-green-500">+</span></h1>
        <p className="pt-5 " >years of experience</p>

        </div>
        <div className="border-r-4 border-indigo-500 pr-8 pb-5">
            <h1 className=" font-bold text-3xl">1.5k <span className="text-green-500">+</span></h1>
            <p className="pt-5 ">clients countrywide</p>
        </div>
        <div className="border-r-4 border-indigo-500 pr-8">
            <h1 className=" font-bold text-3xl">20 <span className="text-green-500">+</span></h1>
            <p className="pt-5 ">public projects</p>
        </div>
        <div className="border-r-4 border-indigo-500 pr-8">
            <h1 className=" font-bold text-3xl">30 <span className="text-green-500">+</span></h1>
            <p className="pt-5 ">employees</p>
        </div>
        <div className=" border-r-4 border-indigo-500 pr-10">
            <h1 className=" font-bold text-3xl">4k <span className="text-green-500">+</span></h1>
            <p className="pt-5 ">trees planted</p>
        </div>

    </div>

    <div className="h-[700px] ">

        <div>
        <div className="ml-[150px]">
            <h1 className=" font-bold text-5xl mt-20">Improve your gardening know-how <br /><span className="text-green-300"> with our  </span>expert-written<br /> <span  className="text-green-300"> knowledge base.</span></h1>
            <p className=" mt-9 text-2xl">WeTree is one of the leading outdoor maintenance providers with more than 1500 <br /> served gardens and 93.83% positive feedback according to our internal rating system.</p>
        </div>

        <div className="ml-[200px] w-[450px] drop-shadow-lg  h-[220px] bg-white  mt-10">
            <div className="flex">
                <img className="h-[90px] w-[90px] ml-10 mb-5 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEVqwlj39/f5+Pr/+/9mwVNowVX8+fxjwFBfv0rv9O7//f/19/Xq8unx9fFuxF1cvkaY0412x2az3azk8OKt26Wk2Jva7Ne+4bi537PQ6MyMz4BYvUHI5cOBy3Of1pWJz3yU04hTvTo5EjqzAAALZ0lEQVR4nO2d53brNgyAJW5rWsMalmQ77/+SJZ3kZphblOzTE/xpm/Y2/gwQBAEQjOL/kUTP/gAh5Q/mVeUP5lXlD+ZV5Q/mVWVTGAAIF/gh4u8B2PL3bQQD7ggkzZpunPu7zGPXZSmACf/5RkgbwAAIE5KNw+W8VEVVCImi+1+KqlrOl3psgCAN/5sDw3CNJIexvUYYI4SwTPhPUbS08yEJrqGQMMK2urYqGUU40gpGlE3FaQQJDMkTCkas9Xw+TxNDeo5vwqbpOh8CeoUwMPzj5OONTdQa5EPoVJ7HQxwIJwAMV0retMUbNdiWkic6dTkIwbMahn+KbDyWzI/kLphN5zGL17uDlTCAgGY++yrlm3relr5ZjbMORqBcS+eVIhNULsNanDUw3MD6MwuCIoQyjkPW7KX+MADm8w0FQ7nj0HN/WLHzeMMQ0F2K1WvlASc6jsBbOb4wMG8Xar8/Wgum1SnzVY4fDIDjNdoARQhCS+9J4wUDyakIulh+Cre1FO4EA5JmQRup5V24rXWJh3LcYUDSb2VhX4JQ7WFqzjCEXNaELraC2TF19mquMCQ7s+1RhLClcY0H3GAA6JadWDhNNTrSOMEAMla7sQivNsdONC4wIJ639MiPguiQutA4wIC4x7uycBpW5w409jAA9NvuLnKa1kE39jBk2J+Fu+jSgcYWBsBhi7jSgoa11j7NEgbA/jksXFhrGwxYwiQzfhYLj9Rqy0DNDgaOxdNYOE3U2wXRVjCQh8nPY+E+rRqtaGxgSH7eeX95oFkaGxoLGEAuT2bhkc3NZvM0wwBYB89buAs7WThoMwwcq6cumHfhTsB8vDHCkGavA4xe6NIZaUwwIG3LZ3O8S3k5mAzNAAPAjJ+/YN6FDabTjQmmWZ7uyT4FVd0qGJCeXsTIhLCjwdAMMKOp1LqrsF5fX9PCgMPrGJkQVGX+MGR4ISMTUp60qtHBgCx6JSOLxEmt8YWBl5fYLr8LveoCTg0MaKZnf/ZHmToNjQYmeXbgLxNaJT4wJHvb+5NiVhoX6TSqQzQ1THLdWzEY1aMxZYoKtWqUMKTZ2y1j3EKL8wZTH6GVMPCy8ylGsAAAZxMNUjs0FQzZe4+5s4hzrYkGY6VDU8HAdieIz4+IPlJ9Zhp0cYQB8b7JJfyVthQ0Wi+gjtAUMHAu9rQy/D0Fy2m0Pg0Xg0I1chhAjnsqBrP6ewAJ4BjpaOhZURiQw5BdU5iY1j8PxJxGpxt+5JRvnHIY2O9oZVwvv79pQLQ0WFEXkMKA+Ljf7i9hMdHQm/z8LIUhzXU3K5OyiLTQWCmNAy3yAE0Ks6OVYaoo85H8plYNljejyGAAOO11KuM+WZ4MA7HuZMgu0jy6FKbRfClhWagiHw7IRXcyRPJcrQyG7JUq5yxyt8T3Oe0pF0ezbN+UwcBhH8Vg5MnC7ayWpWkkMCDdZ8lgHjHKWYDWxoTQoyw+k8Hss2SUNkZSI4ti0UhgSLfHksFUpZfcwjBwIdtpZDDzHixMpZfDycYupGnnRxgQD9svGW5j8kQrZ7HK1UsbhCQwh+3XP1Y1K5HsZFfcknoACUy2+frnMYy8Es71YtnWQpfmcdE8wpDNi2VKFmDNEqFC4s4kMN3GfTJqveTWLCJ9ZgUzbrtk1HpJ7db+u5Tz4//hAQaQedNUJvdj8rUvYnWHg0cpOQY9wsSblsv4XqmI+aFbLZhJ9PsIk9Zbmhk9KnpgEnMM80OYpMfhEcZhm8HItRhNj4oYJrk4FlCopI4ugbEu/qFi7t08n5IFnt4KR5jz464pgbHNzKCiJ9CJRskCTs4VR7rYwGSW1T9U9QQAOFjTYBULSVv3ZYqWx8KzN4zQy70EYUvD/Zh87ZO89ejOQ9VjPCOBsSr/fbDcO56ttm21T85bn56WgDAY959fs13/Nt8rVfFY69UyHQ4G0/nLZGxoOIs8o8ptzO8GWzAYXM7fzR+A3jCfITyLLYzRAfzQyweNVjeCRZocBqkviy2M6WzG9fL7yAtiHY2aJW69r7EgyelMAmPYNDF7YNHTcD+Wy1mAj0/+ELtN0xDOYDzLrJ/TqNYNVd24hO2KG5+W4Yw+0KRn1desuC1Eb4o78Um7pmvKLtA0HQHYWbFhyO8+0bPiKk9yWtVoZHcEiHvDIWm6KmkeXZOKRcTJa1gsD2fmY/OkKF0DWP/uUVGykLWN7KXkCqdXQmO6WtIoWWKPOPkXjMSnSlNN5g62m8IL/KDBfO0r8jD16n5py1STTUMDuym2Qfj1MbHKJ5O0Xn0dzzIJaFeeYcdMRfOxEfK9Ug5M8nr9dATL9KxlRoNqaJCOBYRg4buXXeI8rm0cDUZHyXcj/jwQNJxFAZvWIdK/Ms+8otjEaRQfNx4YVbLEIfQiLtNYFZusy4BqmnRQLqlALDiaLcuAjWV+Rk2Tj/KefUDqMFfXrQu0VhXSdxoe7cmDSMVlCtgGuu5tXTqPiX1Rkx3lu6dcktrcUW75e6UtN9IODYd2k/JmP7MjqUPdlMBIenVb3gjkcKVhOtuOJlx3fvkhDo1AIHapN1vSABjwwqfsZKaAifnBxMG2rWjEVhquIQ/JR1HI2xo7p+bZyTxWie8vAceJqOYDyBtOU7eG09Lk0/g2GnLyljQwU8E42tn9OqiOJjBLpOpTUzRpu9kZ/64UodgnS9DWAuUUCkX7PHBsn8dITROaJUJu7fPuzcBqGh5Eh275qJ0uNvD4zPUygIoGgLDrRZ4y18LwkNB1V+A0Mi8Ah9Djd9DR9WYTaZyvaXGaRw+dhNxf3n8NVt6gU1+guzl/CH5U/r0yk9phTLidoEU550R9tbHzSNOx48/IJhlCxfxfQtWzjjSXTn3uA5U/Sv3JFj1FWD2FSnMduPPJbE+3Lxq4gV6iSdo4b4LhqvFpb/xHI0oc4VlwpBkPpoEhnddharrc1w3fX7YYiTbp5mlphxscvVL17MJPBCDeZEItrTyHG8Qg86s5slMO436TkZuldsaRfiCI30kXo1O2Dctv1+8Ec9BfzFUJjs5+f9AgqNDOAzHMnQGz32fC24x2lCaYbWF48Hx5ockzTFL6d4CJQbeJvXgJKsaVU7RA/zIw8tupDjCi++RFDI0pUjIOMCK38RK6oZVmRostTEzmZ043/SdoMI9rtBk9uboBIYCwo0W1wWYo6J4X6hVCr5q8nAvM00fPWg+ftRuk++S5oLiYNeOmHGFiuMOLExoWxfV/TxiQPHP+rPUobdsZ5zBYbdVZDIMAPWCCVvHcWC7W77lZj9IHoH2KbsqT/WsnDo8cpGs6d/1ZHJ5scHl+Ig+fazUILlttSc4fRlSN9n0cALPWONbYF+aeP9oxsnF95MQNZt8HaGgkaZANCMNpdnsaiPF4zI3FFYbvnofzLk6NLZnzW2fOMDGBwYthj4LoxeOJQHcYHqiN1baRGkZFv8+jbVxgetvSqyF8zXxY/GDEBcDNXtTDtKo9Hzz1g+E0zWUbW6PFsdv3CUouJJ43sDWKzr37M3qrYfiWkw1XGhQHsaVe8wqtP8z95dZ6CRd7Ila1XfycB3VjoZy0q6syTNt1GbVd+rynjt9xmrqaVuOgKaq7fO2T9Cth7jhZv0yrngenUzU06frXzlfD3FvlD+OR+aoHlfeH6Ne/dB4ERuAQkA3L5L56cDlVdRMHeYM+EEx85yF89by5PHxOy7ei5a44DEkcDkYIgDDvb6yk1DSjDGNEGVv6LIEhzOtTQsLE4nyQkGY4VogL/8RYyDeE+4/EvytuQxdzkrC/PTBMLNwb5Brq+st5qaqiKN4hBBP/h6pazpdhzPh/ElIlHxIe5i5EEIG86ca5r+uWS10P/dg1OYBcIRuACNkI5i7CKQiof0ICLnaZbAmzu/zBvKr8wbyq/MG8qvzBvKr8r2D+A2yyuLSfb5EBAAAAAElFTkSuQmCC" alt="" />
                <h1><span className="text-green-400 ml-10 text-2xl  mt-10">Who We</span> Are?</h1>
            </div>
            <p className="ml-10">We provide all types of gardening, landscaping, tree surgery and outdoor maintenance services in all aspects of London, Surrey, Sussex, Essex, Kent, Berkshire, Oxford, Reading, Liverpool, Manchester,. </p>
        </div>

      
        </div>

      

    </div>


</div>

    </div>    
    </div>
}
export default WeTree