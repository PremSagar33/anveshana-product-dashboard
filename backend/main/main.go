package main

import (
	"encoding/json"
	"log"
	"net/http"
)

// Message represents the JSON payload that the server will send.
type Message struct {
	Message string `json:"message"`
}

func main() {
	http.HandleFunc("/api/message", func(w http.ResponseWriter, r *http.Request) {
		// Only respond to POST requests
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		// Read the request body
		var req map[string]string
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			http.Error(w, "Bad request", http.StatusBadRequest)
			return
		}

		// Log the searchTerm for demonstration purposes (optional)
		searchTerm := req["searchTerm"]
		log.Println("Search Term Received:", searchTerm)

		// Create a response Message
		resp := Message{
			Message: "Success! Received searchTerm: " + searchTerm,
		}

		// Set Content-Type header to application/json
		w.Header().Set("Content-Type", "application/json")

		// Write the JSON response
		if err := json.NewEncoder(w).Encode(resp); err != nil {
			http.Error(w, "Internal server error", http.StatusInternalServerError)
		}
	})

	// Start the server on port 8000
	log.Println("Server starting on port 8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
