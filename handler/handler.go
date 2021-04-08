package handler

import (
	"net/http"

	"github.com/labstack/echo"
)

// Info is common information on the service
type Info struct {
	Title string
}

var info = Info{
	"CW Web Runner",
}

func Index(c echo.Context) error {
	data := struct {
		Info
	}{
		Info: info,
	}

	return c.Render(http.StatusOK, "index", data)
}

func Runner(c echo.Context) error {
	data := struct {
		Info
	}{
		Info: info,
	}

	return c.Render(http.StatusOK, "runner", data)
}

func Tutor(c echo.Context) error {
	data := struct {
		Info
	}{
		Info: info,
	}

	return c.Render(http.StatusOK, "tutor", data)
}

func History(c echo.Context) error {
	data := struct {
		Info
	}{
		Info: info,
	}

	return c.Render(http.StatusOK, "history", data)
}

func Signup(c echo.Context) error {
	data := struct {
		Info
	}{
		Info: info,
	}

	return c.Render(http.StatusOK, "signup", data)
}

func SignupProcess(c echo.Context) error {
	return c.NoContent(http.StatusNoContent)
}

func Login(c echo.Context) error {
	data := struct {
		Info
	}{
		Info: info,
	}

	return c.Render(http.StatusOK, "login", data)
}

func LoginProcess(c echo.Context) error {
	return c.NoContent(http.StatusNoContent)
}
