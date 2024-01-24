document.addEventListener('DOMContentLoaded', function () {
    const seatsContainer = document.querySelector('.seats-container');
    const selectedSeats = document.getElementById('selected-seats');
    const totalCostElement = document.getElementById('total-cost');
    const checkoutBtn = document.getElementById('checkout-btn');
    const seatCost = 300; // Cost per seat

    // Create seats dynamically
    for (let row = 1; row <= 6; row++) {
        for (let col = 1; col <= 8; col++) {
            const seat = document.createElement('button');
            seat.className = 'seat';
            seat.innerText = `${row}-${col}`;
            seatsContainer.appendChild(seat);

            // Add click event to select/deselect seats
            seat.addEventListener('click', function () {
                seat.classList.toggle('selected');

                // Update the selected seats count
                const selectedSeatCount = document.querySelectorAll('.seat.selected').length;
                selectedSeats.innerText = selectedSeatCount;

                // Calculate and display total cost
                const totalCost = selectedSeatCount * seatCost;
                totalCostElement.innerText = `$${totalCost}`;

                // Enable or disable the checkout button based on the selected seats
                checkoutBtn.disabled = selectedSeatCount === 0;
            });
        }
    }

    // Add click event to the checkout button
    checkoutBtn.addEventListener('click', function () {
        alert(`Thank you for your purchase! Total Cost: ${totalCostElement.innerText}`);

    });
});
