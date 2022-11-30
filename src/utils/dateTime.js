export const messageTimeFromDate = (timestamp) => {
    
    let options = {
        // weekday: "long", year: "numeric", month: "short",
        // day: "numeric", 
        hour: "2-digit", minute: "2-digit"
    };

    return new Date(timestamp).toLocaleTimeString("en-us", options);
};