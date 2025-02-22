export default `\
#version 300 es
in vec4 inTexture;
out vec4 outTexture;

void main()
{
outTexture = inTexture;
gl_Position = vec4(0, 0, 0, 1.);
// Enforce default value for ANGLE issue (https://bugs.chromium.org/p/angleproject/issues/detail?id=3941)
gl_PointSize = 1.0;
}
`;
