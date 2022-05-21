Blazor.IntersectionObserver
===========================

[![NuGet](https://img.shields.io/nuget/vpre/Blazor.IntersectionObserver.svg)](https://www.nuget.org/packages/Blazor.IntersectionObserver)
[![NuGet](https://img.shields.io/nuget/dt/Blazor.IntersectionObserver.svg)](https://www.nuget.org/packages/Blazor.IntersectionObserver) 

Simple Blazor class library exposing the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

# Installation

You should install [Blazor.IntersectionObserver with NuGet](https://www.nuget.org/packages/Blazor.IntersectionObserver):

    Install-Package Blazor.IntersectionObserver
    
Or via the .NET Core command line interface:

    dotnet add package Blazor.IntersectionObserver

# Configuration

Register the library in wwwroot/index.html (Blazor WebAssembly) or Pages/_Layout.cshtml (Blazor Server) immediately after the Blazor `<script>`:

```html
<script src="./_content/Blazor.IntersectionObserver/blazor.intersectionObserver.js" />
```

# Usage

```html
@using Blazor.IntersectionObserver;

<IntersectionObserver
	Threshold=@(new[] { 0.0, 0.2, 0.4, 0.6, 0.8, 1.0 })
	OnIntersectionChangedCallback=@OnIntersectionChanged>

	<div class="h-[2000px] bg-red-100"></div>

	<TargetElement Name="target1">
		<h1>target1</h1>
	</TargetElement>

	<div class="h-[2000px] bg-blue-100"></div>

	<TargetElement Name="target2">
		<h1>target2</h1>
	</TargetElement>

	<div class="h-[2000px] bg-green-100"></div>

	<TargetElement Name="target3">
		<h1>target3</h1>
	</TargetElement>

</IntersectionObserver>
```

```csharp

@code {
	void OnIntersectionChanged((string? targetName, double ratio) args)
	{
		...
	}
}
```