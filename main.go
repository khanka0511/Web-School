package main

import "net/http"

func main() {
	f := http.FileServer(http.Dir("./"))
	http.Handle("/", f)
	panic(http.ListenAndServe(":8080", nil))
}