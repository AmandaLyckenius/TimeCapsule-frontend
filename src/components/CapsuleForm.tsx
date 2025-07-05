const CapsuleForm = () => {
    return(
        <form action="">

            <label>
                Email:
                <input type="email" name="email" required />
            </label>

            <label>
                Delivery date:
                <input type="date" name="deliveryDate" required />
            </label>

            <label>
                Message:
                <textarea placeholder="Write your vision for your future here"></textarea>
            </label>

            <button type="submit">Send</button>


        </form>
    )
}

export default CapsuleForm;