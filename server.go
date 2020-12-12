package main

import (
	"net/http"
	
	"github.com/labstack/echo/v4"
)

func main() {
    router := NewRouter()

    router.Logger.Fatal(router.Start(":8080"))
}

func NewRouter() *echo.Echo {
	e := echo.New()
	e.GET("/", cwWebRunnerHandler)
    return e
}

func cwWebRunnerHandler(c echo.Context) error {
    return c.String(http.StatusOK, "cw web runner")
}

