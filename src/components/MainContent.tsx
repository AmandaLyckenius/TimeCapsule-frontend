const MainContent  = () => {
    return (
        <main>
            <h2>Create You Time Capsule</h2>
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
        </main>
    )
}

export default MainContent;