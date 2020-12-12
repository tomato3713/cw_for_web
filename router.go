package main

import (
	"io"
	"net/http"
	"text/template"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

type Template struct {
	templates *template.Template
}

func newRouter() *echo.Echo {
	t := &Template{
		templates: template.Must(template.ParseGlob("static/views/*.html")),
	}

	e := echo.New()

	e.Renderer = t

	e.Use(middleware.Logger())

	// service worker
	e.Static("/assets", "static/assets")
	e.File("/service-worker.js", "static/assets/js/service-worker.js")
	e.File("/manifest.json", "static/manifest.json")

	e.File("/favicon.ico", "static/assets/img/icon/favicon.ico")

	e.GET("/", cwWebRunnerHandler)
	return e
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func cwWebRunnerHandler(c echo.Context) error {
	data := struct {
		Info
	}{
		Info: info,
	}

	return c.Render(http.StatusOK, "runner", data)
}
