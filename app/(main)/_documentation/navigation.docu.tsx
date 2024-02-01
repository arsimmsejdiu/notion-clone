/** const resetWidth *********************************
 * Resets the width of the sidebar and navbar.
 *
 * If the sidebarRef and navbarRef are available, this function sets the isCollapsed state to false and the isResetting state to true.
 * It then adjusts the width and left properties of the sidebarRef and navbarRef based on the value of isMobile.
 * Finally, it sets a timeout to reset the isResetting state to false after 300 milliseconds.
 *
 * The function first checks if the sidebarRef and navbarRef elements exist.
 * If they exist, the function sets the isCollapsed state to false and the isResetting state to true.
 * The function then adjusts the width of the sidebarRef element based on the screen size. If the screen size is mobile, the width is set to "100%", otherwise it is set to "240px".
 * Next, the function adjusts the width of the navbarRef element based on the screen size. If the screen size is mobile, the width is set to "0", otherwise it is set to "calc(100% - 240px)".
 * Finally, the function adjusts the left position of the navbarRef element based on the screen size. If the screen size is mobile, the left position is set to "100%", otherwise it is set to "240px".
 * After a delay of 300 milliseconds, the function sets the isResetting state back to false.
 */

/** const collapse *********************************
 * Collapses the sidebar and expands the navbar.
 *
 * This function sets the 'isCollapsed' state to true and 'isResetting' state to true.
 * It then updates the styles of the sidebar and navbar to collapse the sidebar and expand the navbar.
 * After 300 milliseconds, it sets the 'isResetting' state to false.
 */

/** const handleMouseUp *********************************
 * Handles the mouse up event.
 *
 * This function is called when the mouse button is released after resizing the sidebar.
 * It sets the value of isResizingRef.current to false and removes the event listeners for mousemove and mouseup.
 */

/** const handleMouseMove *********************************
 * Handles the mouse move event during resizing of the sidebar.
 *
 * @param event - The mouse event object.
 * Check if the resizing flag is set. If not, return early.
    Get the new width of the sidebar based on the mouse position.
    Ensure that the new width is within the allowed range (240 to 480 pixels).
    Update the width of the sidebar and navbar elements using the new width.
    Calculate and update the width of the navbar element based on the new width of the sidebar.
 */

/** const handleMouseDown *********************************
 * Handles the mouse down event on the div element.
 *
 * @param event - The mouse down event.
 * Prevent the default behavior of the event, which is to select text or elements on the page.
    Stop the event from propagating to parent elements.
    Set the isResizingRef variable to true, indicating that the resizing action has started.
    Add event listeners for the mousemove and mouseup events on the document object.
    When the mousemove event is triggered, call the handleMouseMove function.
    When the mouseup event is triggered, call the handleMouseUp function.
 */
