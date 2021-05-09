package main

func main() {
	router := newRouter()

	router.Logger.Fatal(router.Start(":8080"))
	router.Logger.Fatal(router.StartAutoTLS(":443"))
}
