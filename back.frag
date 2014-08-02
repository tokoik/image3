#version 330

uniform sampler2DRect image;
uniform sampler2DRect back;

layout (location = 0) out vec4 fc;

void main()
{
  fc = abs(texture(image, gl_FragCoord.xy) - texture(back, gl_FragCoord.xy));
}
