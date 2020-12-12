package main

// Info is common information on the service
type Info struct {
	Title string
}

var info = Info{
	"CW Web Runner",
}

func main() {
	router := newRouter()

	router.Logger.Fatal(router.Start(":8080"))
	router.Logger.Fatal(router.StartAutoTLS(":443"))
}
